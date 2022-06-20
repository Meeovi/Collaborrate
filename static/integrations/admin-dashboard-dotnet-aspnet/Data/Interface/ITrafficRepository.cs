using System;
using System.Collections.Generic;
using App.Models;

namespace App.Data 
{
    public interface ITrafficRepository
    {
        void SaveChanges();

        IEnumerable <TrafficData> GetTrafficData();

        TrafficData AddTrafficData(TrafficData data);

        TrafficData GetTrafficDataByDate(DateTime date);
    }
}