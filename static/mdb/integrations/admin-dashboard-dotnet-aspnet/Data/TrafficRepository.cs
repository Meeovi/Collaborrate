using System;
using System.Collections.Generic;
using System.Linq;
using App.Models;

namespace App.Data
{
    public class TrafficRepository : ITrafficRepository
    {
        private readonly DataContext _context;

        public TrafficRepository(DataContext context)
        {
            _context = context;
        }

        public TrafficData AddTrafficData(TrafficData data)
        {
            if (data == null)
            {
                throw new ArgumentNullException(nameof(data));
            }

            var existingRecord = GetTrafficDataByDate(data.CreatedAt);

            if (existingRecord == null)
            {
                _context.TrafficData.Add(data);

                return data;
            }
            else
            {
                return existingRecord;
            }
        }

        public IEnumerable<TrafficData> GetTrafficData()
        {
            return _context.TrafficData.ToList();
        }

        public TrafficData GetTrafficDataByDate(DateTime date)
        {
            return _context.TrafficData.FirstOrDefault(p => p.CreatedAt == date);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}