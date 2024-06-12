import styled from "styled-components";
import { FiSearch, FiGrid, FiList } from "react-icons/fi";

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
    background-color: #ffccbc;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 20px;

    &:hover {
        background-color: #ffab91;
    }

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
`;

export const Menu = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-left: 100px;
`;

export const MenuItem = styled.button<{ selected: boolean }>`
    background-color: ${({ selected }) => (selected ? "#ffccbc" : "#ffffff")};
    border: 1px solid #ffab91;
    color: ${({ selected }) => (selected ? "#b71c1c" : "#ff5722")};
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;

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

export const ProductCard = styled.div<{ $viewMode: string }>`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s;
    display: flex;
    flex-direction: ${({ $viewMode }) =>
        $viewMode === "card" ? "column" : "row"};
    min-height: 200px; /* Ajuste a altura conforme necessário */

    &:hover {
        transform: scale(1.05);
    }
`;

export const ProductImage = styled.img<{ $viewMode: string }>`
    width: ${({ $viewMode }) => ($viewMode === "card" ? "100%" : "150px")};
    height: ${({ $viewMode }) => ($viewMode === "card" ? "150px" : "100%")};
    object-fit: cover;
`;

export const ProductDetails = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ProductTitle = styled.h3`
    margin: 0;
    font-size: 18px;
    color: #333;
`;

export const ProductDescription = styled.p`
    font-size: 14px;
    color: #777;
`;

export const ProductPrice = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #b71c1c;
`;

export const ProductUnits = styled.span`
    display: block;
    background-color: #ffccbc;
    color: #b71c1c;
    padding: 5px 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const NoItemsMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px; /* Altura mínima igual ao ProductCard */
    color: #777;
    font-size: 18px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 20px;
    width: 100%;
`;
