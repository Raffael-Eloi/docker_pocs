FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

ENV ASPNETCORE_ENVIRONMENT=Development

WORKDIR /SimpleAPI
COPY . .

RUN dotnet restore
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final

WORKDIR /SimpleAPI
COPY --from=build /SimpleAPI/out .

EXPOSE 80 8080 8081

ENTRYPOINT ["dotnet", "SimpleAPI.dll"]