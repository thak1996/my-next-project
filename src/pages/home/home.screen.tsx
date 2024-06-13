import React from "react";
import Slider from "react-slick";
import useHomeController from "../../controllers/home.controller";
import {
    Container,
    Header,
    SearchWrapper,
    SearchIcon,
    SearchInput,
    ToggleButton,
    ListIcon,
    GridIcon,
    Content,
    MenuWrapper,
    MenuItem,
    ProductGrid,
    ProductCardGrid,
    ProductCardList,
    ProductImage,
    ProductDetails,
    ProductTitle,
    ProductDescription,
    ProductPriceWrapper,
    ProductPrice,
    ProductUnits,
    NoItemsMessage,
    AddIcon,
    ProductImageWrapper,
    CarouselWrapper,
} from "../../styles/home.style";

const HomePage: React.FC = () => {
    const {
        categories,
        products,
        handleSearch,
        viewMode,
        toggleViewMode,
        selectedCategory,
        handleCategorySelect,
    } = useHomeController();

    const handleCategoryClick = (category: string) => {
        handleCategorySelect(category);
    };

    const carouselSettings = {
        className: "carousel-wrapper",
        centerMode: true,
        variableWidth: true,
        speed: 500,
        focusOnSelect: true,
        infinite: true,
        arrows: false,
    };

    return (
        <Container>
            <Header>
                <SearchWrapper>
                    <SearchIcon />
                    <SearchInput
                        placeholder="Digite aqui..."
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </SearchWrapper>
            </Header>
            <Content>
                <MenuWrapper>
                    <ToggleButton onClick={toggleViewMode}>
                        {viewMode === "card" ? <GridIcon /> : <ListIcon />}
                    </ToggleButton>
                    <CarouselWrapper>
                        <Slider {...carouselSettings}>
                            {categories.map((category, index) => (
                                <MenuItem
                                    key={index}
                                    selected={category === selectedCategory}
                                    onClick={() =>
                                        handleCategoryClick(category)
                                    }
                                >
                                    {category}
                                </MenuItem>
                            ))}
                        </Slider>
                    </CarouselWrapper>
                </MenuWrapper>
                {products.length > 0 ? (
                    <ProductGrid $viewMode={viewMode}>
                        {products.map((product) =>
                            viewMode === "card" ? (
                                <ProductCardGrid key={product.id}>
                                    <ProductImageWrapper>
                                        <ProductImage
                                            src={product.image}
                                            alt={product.title}
                                            $viewMode={viewMode}
                                        />
                                    </ProductImageWrapper>
                                    <ProductDetails>
                                        <ProductTitle $viewMode={viewMode}>
                                            {product.title}
                                        </ProductTitle>
                                        <ProductDescription>
                                            {product.description}
                                        </ProductDescription>
                                        <ProductUnits>
                                            {product.units}
                                        </ProductUnits>
                                    </ProductDetails>
                                    <ProductPriceWrapper $viewMode={viewMode}>
                                        <ProductPrice>
                                            {product.price}
                                        </ProductPrice>
                                        <AddIcon />
                                    </ProductPriceWrapper>
                                </ProductCardGrid>
                            ) : (
                                <ProductCardList key={product.id}>
                                    <ProductImageWrapper>
                                        <ProductImage
                                            src={product.image}
                                            alt={product.title}
                                            $viewMode={viewMode}
                                        />
                                    </ProductImageWrapper>
                                    <ProductDetails>
                                        <ProductTitle $viewMode={viewMode}>
                                            {product.title}
                                        </ProductTitle>
                                        <ProductDescription>
                                            {product.description}
                                        </ProductDescription>
                                        <ProductUnits>
                                            {product.units}
                                        </ProductUnits>
                                    </ProductDetails>
                                    <ProductPriceWrapper $viewMode={viewMode}>
                                        <ProductPrice>
                                            {product.price}
                                        </ProductPrice>
                                        <AddIcon />
                                    </ProductPriceWrapper>
                                </ProductCardList>
                            )
                        )}
                    </ProductGrid>
                ) : (
                    <NoItemsMessage>Não há itens</NoItemsMessage>
                )}
            </Content>
        </Container>
    );
};

export default HomePage;
