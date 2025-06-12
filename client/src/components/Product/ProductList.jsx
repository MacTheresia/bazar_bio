import products from "../../datas/data.json";

export default function ProductList() {
  return (
    <section style={{ padding: "2rem" }}>
      <h3>Nos produits</h3>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {products.length === 0 && <p>Aucun produit trouvé.</p>}
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              width: "200px",
            }}
          >
            <img src={product.image} alt={product.name} width="100%" />
            <h4>{product.name}</h4>
            <p>{product.price} €</p>
          </div>
        ))}
      </div>
    </section>
  );
}
