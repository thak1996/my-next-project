import React from "react";
import useHomeController from "./home.controller";
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
    Menu,
    MenuItem,
    ProductGrid,
    ProductCard,
    ProductImage,
    ProductDetails,
    ProductTitle,
    ProductDescription,
    ProductPrice,
    ProductUnits,
    NoItemsMessage,
} from "./home.style";

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
                        {viewMode === "card" ? <ListIcon /> : <GridIcon />}
                    </ToggleButton>
                    <Menu>
                        {categories.map((category, index) => (
                            <MenuItem
                                key={index}
                                selected={category === selectedCategory}
                                onClick={() => handleCategorySelect(category)}
                            >
                                {category}
                            </MenuItem>
                        ))}
                    </Menu>
                </MenuWrapper>
                {products.length > 0 ? (
                    <ProductGrid $viewMode={viewMode}>
                        {products.map((product) => (
                            <ProductCard key={product.id} $viewMode={viewMode}>
                                <ProductImage
                                    src={product.image}
                                    alt={product.title}
                                    $viewMode={viewMode}
                                />
                                <ProductDetails>
                                    <ProductUnits>{product.units}</ProductUnits>
                                    <ProductTitle>{product.title}</ProductTitle>
                                    <ProductDescription>
                                        {product.description}
                                    </ProductDescription>
                                    <ProductPrice>{product.price}</ProductPrice>
                                </ProductDetails>
                            </ProductCard>
                        ))}
                    </ProductGrid>
                ) : (
                    <NoItemsMessage>Não há itens</NoItemsMessage>
                )}
            </Content>
        </Container>
    );
};

export default HomePage;
