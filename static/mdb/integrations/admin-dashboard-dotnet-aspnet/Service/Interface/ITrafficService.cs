using System.Collections.Generic;
using App.Models;

namespace App.Service 
{
    public interface ITrafficService
    {
        void SaveChanges();

        IEnumerable <TrafficData> GetTrafficData();

        TrafficData AddTrafficData();
    }
}