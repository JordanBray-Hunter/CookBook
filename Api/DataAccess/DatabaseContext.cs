
using Api.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Api.DataAccess;


public class DatabaseContext(DbContextOptions options): DbContext(options)
{

    DbSet<WeatherForecast> forecasts {get; set;} = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}