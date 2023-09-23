class dataTools{
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }

// filter
filter(){
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields', 'search', 'employee'];
    excludedFields.forEach(el => delete queryObj[el]);

    if (this.queryString.employee) {
      queryObj.role = 'employee'; 
    }
    const fieldsToFilter = ['name', 'assigned', 'position', 'department', 'gender', 'city', 'status'];
    fieldsToFilter.forEach(field => {
        if(queryObj[field]){
            queryObj[field] = {$eq: queryObj[field]};
        }
    });

//Search
if (this.queryString.search){
    const searchRegExp = new RegExp(this.queryString.search, 'i');
    queryObj.$or = [
        {name: searchRegExp},
        {surname: searchRegExp},
        {city: searchRegExp},
        {email: searchRegExp},
        {gender: searchRegExp},
    ];
}
this.query = this.query.find(queryObj);
return this;
}
//Sort
sort() {
    if (this.queryString.sort) {
        let sortBy = this.queryString.sort.split(',').join(' ');
        if (this.queryString.sort === 'a-zh') {
            sortBy = 'name'; 
        } else if (this.queryString.sort === 'zh-a') {
            sortBy = '-name';
        } else if (this.queryString.sort === 'surname') {
            sortBy = 'surname';
        } else if (this.queryString.sort === 'email') {
            sortBy = 'email';
        } else if (this.queryString.sort == 'city') {
            sortBy = 'city';
        }
        this.query = this.query.sort(sortBy);
    } else {
        this.query = this.query.sort('-createdAt');
    }
    return this;
}

//Paginim

limitFields(){
    if(this.queryString.fields){
        const fields = this.queryString.fields.split(',').join(' ');
        this.query = this.query.select(fields);
    }else {
        this.query = this.query.select('-__v');
    }
    return this;
}
paginate() {
    const page = parseInt(this.queryString.page, 10) || 1;
    const limit = 2;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);
    return this;
    }

}


module.exports = dataTools;





















