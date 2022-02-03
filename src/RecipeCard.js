import React from "react";

const RecipeCard = ({ title, imageUrl, ingredients, source }) => {
  return (
    <div>
      <div className="card mb-3 p-2" style={{ maxwidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-5">
            <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{title.slice(0, 23)}</h5>
              <div className="dropdown">
                <button
                  className="btn btn-outline-danger dropdown-toggle btn-sm"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ingredients
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>
                      <a className="dropdown-item" href="#">
                        {ingredient.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={source}
                target="_blank"
                className="btn btn-outline-danger btn-sm mt-3"
              >
                See Original Recipe
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
