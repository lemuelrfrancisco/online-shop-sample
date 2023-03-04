import axios from "axios";
import { useEffect, useState } from "react";

function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div className="home-section">
      <section class="bg-primary py-5">
        <div class="container">
          <h2 class="text-white">Food Corner</h2>
          <ol class="breadcrumb ondark mb-0">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Library</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Data
            </li>
          </ol>
        </div>
      </section>

      <section class="padding-y">
        <div class="container">
          <div class="row">
            <aside class="col-lg-3">
              <button
                class="btn btn-outline-secondary mb-3 w-100  d-lg-none"
                data-bs-toggle="collapse"
                data-bs-target="#aside_filter"
              >
                Show filter
              </button>

              <div id="aside_filter" class="collapse card d-lg-block mb-5">
                <article class="filter-group">
                  <header class="card-header">
                    <a
                      href="#"
                      class="title"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_aside1"
                    >
                      <i class="icon-control fa fa-chevron-down"></i> Related
                      items
                    </a>
                  </header>
                  <div class="collapse show" id="collapse_aside1">
                    <div class="card-body">
                      <ul class="list-menu">
                        <li>
                          <a href="#">Electronics </a>
                        </li>
                        <li>
                          <a href="#">Accessories </a>
                        </li>
                        <li>
                          <a href="#">Home items </a>
                        </li>
                        <li>
                          <a href="#">Men's clothing </a>
                        </li>
                        <li>
                          <a href="#">Interior items </a>
                        </li>
                        <li>
                          <a href="#">Magazines </a>
                        </li>
                        <li>
                          <a href="#">Category name </a>
                        </li>
                        <li>
                          <a href="#">Home items </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>

                <article class="filter-group">
                  <header class="card-header">
                    <a
                      href="#"
                      class="title"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_aside_brands"
                    >
                      <i class="icon-control fa fa-chevron-down"></i> Brands
                    </a>
                  </header>
                  <div class="collapse show" id="collapse_aside_brands">
                    <div class="card-body">
                      <label class="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          checked
                        />
                        <span class="form-check-label"> Burger King </span>
                        <b class="badge rounded-pill bg-gray-dark float-end">
                          120
                        </b>
                      </label>

                      <label class="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          checked
                        />
                        <span class="form-check-label"> Absolute </span>
                        <b class="badge rounded-pill bg-gray-dark float-end">
                          15
                        </b>
                      </label>

                      <label class="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          checked
                        />
                        <span class="form-check-label"> Nestle </span>
                        <b class="badge rounded-pill bg-gray-dark float-end">
                          35
                        </b>
                      </label>

                      <label class="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          checked
                        />
                        <span class="form-check-label"> Act2 </span>
                        <b class="badge rounded-pill bg-gray-dark float-end">
                          89
                        </b>
                      </label>

                      <label class="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span class="form-check-label"> Lipton </span>
                        <b class="badge rounded-pill bg-gray-dark float-end">
                          30
                        </b>
                      </label>

                      <label class="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span class="form-check-label"> San Miguel </span>
                        <b class="badge rounded-pill bg-gray-dark float-end">
                          30
                        </b>
                      </label>
                    </div>
                  </div>
                </article>

                <article class="filter-group">
                  <header class="card-header">
                    <a
                      href="#"
                      class="title"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_aside2"
                    >
                      <i class="icon-control fa fa-chevron-down"></i> Price
                    </a>
                  </header>
                  <div class="collapse show" id="collapse_aside2">
                    <div class="card-body">
                      <input
                        type="range"
                        class="form-range"
                        min="0"
                        max="100"
                      />
                      <div class="row mb-3">
                        <div class="col-6">
                          <label for="min" class="form-label">
                            Min
                          </label>
                          <input
                            class="form-control"
                            id="min"
                            placeholder="$0"
                            type="number"
                          />
                        </div>

                        <div class="col-6">
                          <label for="max" class="form-label">
                            Max
                          </label>
                          <input
                            class="form-control"
                            id="max"
                            placeholder="$1,0000"
                            type="number"
                          />
                        </div>
                      </div>
                      <button class="btn btn-light w-100" type="button">
                        Apply
                      </button>
                    </div>
                  </div>
                </article>

                <article class="filter-group">
                  <header class="card-header">
                    <a
                      href="#"
                      class="title"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_aside3"
                    >
                      <i class="icon-control fa fa-chevron-down"></i> Size
                    </a>
                  </header>
                  <div class="collapse show" id="collapse_aside3">
                    <div class="card-body">
                      <label class="checkbox-btn">
                        <input type="checkbox" />
                        <span class="btn btn-light"> XS </span>
                      </label>

                      <label class="checkbox-btn">
                        <input type="checkbox" />
                        <span class="btn btn-light"> SM </span>
                      </label>

                      <label class="checkbox-btn">
                        <input type="checkbox" />
                        <span class="btn btn-light"> LG </span>
                      </label>

                      <label class="checkbox-btn">
                        <input type="checkbox" />
                        <span class="btn btn-light"> XXL </span>
                      </label>
                    </div>
                  </div>
                </article>
              </div>
            </aside>
            <main class="col-lg-9">
              <header class="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                <strong class="d-block py-2">32 Items found </strong>
                <div class="ms-auto ">
                  <select class="form-select d-inline-block w-auto me-1">
                    <option value="0">Best match</option>
                    <option value="1">Recommended</option>
                    <option value="2">High rated</option>
                    <option value="3">Randomly</option>
                  </select>
                  <div class="btn-group">
                    <a
                      href="#"
                      class="btn btn-light"
                      data-bs-toggle="tooltip"
                      title="List view"
                    >
                      <i class="fa fa-bars"></i>
                    </a>
                    <a
                      href="#"
                      class="btn btn-light active"
                      data-bs-toggle="tooltip"
                      title="Grid view"
                    >
                      <i class="fa fa-th"></i>
                    </a>
                  </div>
                </div>
              </header>

              <div class="row">
                {products.map((product, i) => (
                  <div class="col-lg-4 col-md-6 col-sm-6" key={i}>
                    <figure class="card card-product-grid">
                      <div class="img-wrap">
                        <img
                          src={`http://localhost/php-rest-api-git/${product.image}`}
                        />
                      </div>
                      <figcaption class="info-wrap border-top">
                        <div class="price-wrap">
                          <strong class="price">${product.price}</strong>
                          <del class="price-old">${product.price + 5}</del>
                        </div>
                        <p class="title mb-2 font-weight-bold">
                          <strong>{product.name}</strong>
                        </p>
                        <p class="subtitle mb-2">{product.description}</p>

                        <a href="#" class="btn btn-primary">
                          Add to cart
                        </a>
                        <a href="#" class="btn btn-light btn-icon">
                          {" "}
                          <i class="fa fa-heart"></i>{" "}
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>

              <hr />

              <footer class="d-flex mt-4">
                <nav class="ms-3">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item active" aria-current="page">
                      <span class="page-link">2</span>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </footer>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Shop;
