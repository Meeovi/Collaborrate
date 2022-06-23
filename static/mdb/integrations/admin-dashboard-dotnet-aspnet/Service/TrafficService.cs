using System;
using System.Collections.Generic;
using App.Data;
using App.Models;

namespace App.Service
{
    public class TrafficService : ITrafficService {

        private readonly ITrafficRepository _repository;
        private Random _generator = new Random();
        private readonly DateTime _startDate = new DateTime(2020, 1, 1);

        public TrafficService(ITrafficRepository repository)
        {
            _repository = repository;
        }

        public TrafficData AddTrafficData()
        {
            int range = (DateTime.Today - _startDate).Days;

            var data = new TrafficData();

            data.Impressions = _generator.Next(100, 601);
            data.Clicks = _generator.Next(5, 101);
            data.Position = _generator.Next(10, 50);
            data.CreatedAt = _startDate.AddDays(_generator.Next(range));

            return _repository.AddTrafficData(data);
        }
        
        public IEnumerable<TrafficData> GetTrafficData()
        {
            var TrafficData = _repository.GetTrafficData();

            return TrafficData;
        }

        public void SaveChanges()
        {
            _repository.SaveChanges();
        }
    }
}