import { useState } from "react";

const categories = ["Empadas", "Sopas", "Pastel para fritar", "Pão de queijo"];

const products = [
    {
        id: 1,
        title: "Empada 4 queijos",
        category: "Empadas",
        description:
            "Uma empada irresistível recheada com uma combinação perfeita de quatro queijos selecionados, derretidos e cremosos. A massa crocante envolve o recheio rico e saboroso, proporcionando uma experiência gourmet em cada mordida.",
        price: "R$12,99",
        units: "4 unidades",
        image: "/foods/empadas/food1.jpg",
    },
    {
        id: 2,
        title: "Empada de Camarão",
        category: "Empadas",
        description:
            "Deliciosa empada recheada com camarões frescos e suculentos, temperados com especiarias e ervas finas. A massa leve e crocante complementa o sabor do mar, criando uma explosão de sabor a cada mordida.",
        price: "R$13,99",
        units: "4 unidades",
        image: "/foods/empadas/food3.jpg",
    },
    {
        id: 3,
        title: "Empada de Frango com Palmito",
        category: "Empadas",
        description:
            "Uma empada clássica com recheio de frango desfiado e palmito macio, temperados com ervas aromáticas. A massa crocante e dourada é o toque final para esta combinação deliciosa e reconfortante.",
        price: "R$12,99",
        units: "8 unidades",
        image: "/foods/empadas/food2.jpg",
    },
    {
        id: 4,
        title: "Empada de Queijo",
        category: "Empadas",
        description:
            "Empada deliciosa recheada com um creme de queijo suave e derretido, envolto em uma massa crocante e dourada. Cada mordida oferece uma textura cremosa e um sabor irresistível de queijo.",
        price: "R$21,99",
        units: "8 unidades",
        image: "/foods/empadas/food4.jpg",
    },
    {
        id: 5,
        title: "Empada de Frango",
        category: "Empadas",
        description:
            "Empada tradicional recheada com frango desfiado e bem temperado, envolto em uma massa crocante e saborosa. Ideal para qualquer ocasião, esta empada oferece um sabor caseiro e reconfortante.",
        price: "R$21,99",
        units: "8 unidades",
        image: "/foods/empadas/food5.jpg",
    },
];

const useHomeController = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [viewMode, setViewMode] = useState("card");
    const [selectedCategory, setSelectedCategory] = useState("Empadas");

    const handleSearch = (value: string) => {
        setSearchTerm(value.toLowerCase());
    };

    const toggleViewMode = () => {
        setViewMode(viewMode === "card" ? "list" : "card");
    };

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
    };

    const filteredProducts = products.filter(
        (product) =>
            product.title.toLowerCase().includes(searchTerm) &&
            product.category === selectedCategory
    );

    return {
        categories,
        products: filteredProducts,
        searchTerm,
        handleSearch,
        viewMode,
        toggleViewMode,
        selectedCategory,
        handleCategorySelect,
    };
};

export default useHomeController;
