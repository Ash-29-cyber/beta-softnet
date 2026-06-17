# PowerShell Script to Bootstrap and Run Spring Boot Backend
$ErrorActionPreference = "Stop"

$MavenVersion = "3.9.6"
$MavenDir = "d:\Beta-softnet\backend\apache-maven-$MavenVersion"
$ZipFile = "d:\Beta-softnet\backend\maven.zip"

# Check if Maven bin exists
if (-not (Test-Path "$MavenDir\bin\mvn.cmd")) {
    Write-Host "=========================================================="
    Write-Host "Maven not found. Downloading Apache Maven $MavenVersion..."
    Write-Host "=========================================================="
    
    $Uri = "https://archive.apache.org/dist/maven/maven-3/$MavenVersion/binaries/apache-maven-$MavenVersion-bin.zip"
    Invoke-WebRequest -Uri $Uri -OutFile $ZipFile
    
    Write-Host "Extracting Maven to backend directory..."
    Expand-Archive -Path $ZipFile -DestinationPath "d:\Beta-softnet\backend"
    
    Write-Host "Cleaning up zip file..."
    Remove-Item $ZipFile
}

Write-Host "=========================================================="
Write-Host "Bootstrapping and Starting Spring Boot 3 API Backend..."
Write-Host "Database mode: In-Memory H2 fallback"
Write-Host "=========================================================="

# Run maven spring boot run
& "$MavenDir\bin\mvn.cmd" spring-boot:run
