/** @jsx React.DOM */

var Navigation = ReactRouter.Navigation;

var MealPlan = React.createClass({
  
  mixins: [Navigation],

  _transition: function(e){
    this.transitionTo(e.target.dataset.id);
  },

  render : function() {
    return (
      <div>
        <h1>Meal Plan</h1>
        {this.props.mealPlan.map(function(recipe, i) {
            return (
              <div className="mealPlanContainer" key={i}>
                <div className="recipe">{recipe.recipeName}</div>
                <img className="recipeImage" src={recipe.smallImgUrl}></img>
              </div>
            )
          }, this)}
      </div>
    );
  }
});