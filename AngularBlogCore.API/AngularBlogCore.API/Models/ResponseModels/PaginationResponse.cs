using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularBlogCore.API.Models.ResponseModels
{
    public class PaginationResponse<T>
    {
        public int TotalCount { get; set; }
        public IEnumerable<T> Response { get; set; }
    }
}
