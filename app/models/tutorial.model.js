module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      account_number:String,
      firstname:String,
      lastname:String,
      address:String,
      email:String,
      balance:String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  
  const Tutorial = mongoose.model("banks", schema);
  return Tutorial;
};
