using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MinhaSacola.Repository
{
    public interface IRepository<T>
    {
        IQueryable<T> GetAll();
        void InsertOnSubmit(T entity);
        void DeleteOnSubmit(T entity);
        void SubmitChanges();
    }
}
