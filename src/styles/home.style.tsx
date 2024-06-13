import styled from "styled-components";
import { FiSearch, FiGrid, FiList, FiPlus } from "react-icons/fi";

export const Container = styled.div`
    padding: 20px;
    padding-top: 8%;
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    background-color: #b71c1c;
    padding: 20px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 800px;
    position: relative;
`;

export const SearchIcon = styled(FiSearch)`
    position: absolute;
    left: 10px;
    font-size: 20px;
    color: #999;
`;

export const SearchInput = styled.input`
    flex-grow: 1;
    padding: 10px 10px 10px 40px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
`;

export const ToggleButton = styled.button`
    padding: 10px;
    background-color: #f2d0d0;
    border: none;
    border-radius: 8px;
    color: #c91d1d;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 20px;

    svg {
        font-size: 20px;
    }
`;

export const ListIcon = styled(FiList)``;
export const GridIcon = styled(FiGrid)``;

export const Content = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const MenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
    width: 100%;
    overflow: hidden; /* Adicionado para o efeito de carrossel */
`;

export const Carousel = styled.div`
    display: flex;
    transition: transform 0.3s ease-in-out;
`;

export const MenuItem = styled.button<{ selected: boolean }>`
    background-color: ${({ selected }) => (selected ? "#ffccbc" : "#ffffff")};
    border: 1px solid ${({ selected }) => (selected ? "#C91D1D" : "#DEC486")};
    color: "#431213";
    width: 200px;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.5px;
    transition: background-color 0.3s;
    white-space: nowrap; /* Evitar quebra de linha */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;

    &:hover {
        background-color: #ffccbc;
    }
`;

export const ProductGrid = styled.div<{ $viewMode: string }>`
    display: grid;
    grid-template-columns: ${({ $viewMode }) =>
        $viewMode === "card" ? "repeat(auto-fill, minmax(200px, 1fr))" : "1fr"};
    gap: 20px;
`;

export const ProductCardGrid = styled.div`
    background-color: #fbf8f0;
    border-radius: 8px;
    border: 1px solid #f2e8d0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s;
    display: flex;
    flex-direction: column;
    padding: 16px;
    min-height: min-content;

    &:hover {
        transform: scale(1.05);
    }
`;

export const ProductCardList = styled.div`
    background-color: #fbf8f0;
    border-radius: 8px;
    border: 1px solid #f2e8d0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s;
    display: flex;
    gap: 16px;
    padding: 16px;
    min-height: min-content;

    &:hover {
        transform: scale(1.05);
    }
`;

export const ProductImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProductImage = styled.img<{ $viewMode: string }>`
    width: ${({ $viewMode }) => ($viewMode === "card" ? "100%" : "104px")};
    height: ${({ $viewMode }) => ($viewMode === "card" ? "auto" : "104px")};
    object-fit: cover;
    border-radius: 8px;
`;

export const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    flex: 1;
`;

export const ProductTitle = styled.h3<{ $viewMode: string }>`
    margin: 0;
    padding-top: ${({ $viewMode }) => ($viewMode === "card" ? "10px" : "0")};
    font-size: 18px;
    color: #27241f;
    font-weight: bold;
`;

export const ProductDescription = styled.p`
    font-size: 14px;
    color: #27241f;
    max-width: 95%;
`;

export const ProductPriceWrapper = styled.div<{ $viewMode: string }>`
    display: flex;
    align-items: center;
    justify-content: ${({ $viewMode }) =>
        $viewMode === "card" ? "space-between" : "space-around"};
    width: ${({ $viewMode }) => ($viewMode === "card" ? "100%" : "10%")};
`;

export const ProductPrice = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #27241f;
`;

export const ProductUnits = styled.span`
    display: inline-flex;
    justify-content: left;
    background-color: #ffd9b6;
    color: #b71c1c;
    border-color: #dd7c24;
    padding: 5px 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    font-weight: bold;
    white-space: nowrap;
    width: min-content;
    min-width: 0;
`;

export const NoItemsMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    color: #777;
    font-size: 18px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 20px;
    width: auto;
`;

export const AddIcon = styled(FiPlus)`
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #c91d1d;
    padding: 7px;
    gap: 7px;

    &:hover {
        background-color: #b71c1c;
    }
`;
