var recipes = {
  prop: '1',
  prop2: '2'
};
function updateObjectWithKeyAndValue(object, key, value){
  return recipes
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key){
  object = 'prop'
  return object 
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
}