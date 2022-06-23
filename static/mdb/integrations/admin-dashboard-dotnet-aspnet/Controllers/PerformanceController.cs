using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using App.Models;
using AutoMapper;
using App.Service;

namespace App.Controllers
    {
    [Route("/performance")]
    [ApiController]
    public class PerformanceController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly ITrafficService _trafficService;
        private readonly IAuthService _authService;

        public PerformanceController(IMapper mapper, ITrafficService trafficService, IAuthService authService)
        {
            _mapper = mapper;
            _trafficService = trafficService;
            _authService = authService;
        }

        [HttpGet("traffic")]
        public ActionResult <IEnumerable<TrafficData>> GetTrafficData()
        {
            if (_authService.IsAuthenticated(HttpContext.User))
            {
                var trafficData = _trafficService.GetTrafficData();

                return Ok(trafficData);
            }
            
            return Unauthorized();
        }

        [HttpPost("traffic")]
        public ActionResult <TrafficData> AddTrafficData()
        {
            var trafficData = _trafficService.AddTrafficData();
            
            _trafficService.SaveChanges();

            return Ok(trafficData);
        }
    }
}