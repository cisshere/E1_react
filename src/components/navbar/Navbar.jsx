import React from "react";
import { useContext } from "react";
import {
  HeaderContainerStyled,
  NavbarContainerStyled,
  MenuStyled,
  NavListPrincipal,
  BtnNavbar,
  LinkContainerInicioSesion,
  ButtonCart,
  ButtonMenu,
  LogoMarca,
  NavItem,
  Carrito,
  ContenedorCarrito,
  ProductoCarrito,
  ProdImgCarrito,
  DatosProductCarrito,
  CambiarCantidad,
} from "./NavbarStyles";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import { Context } from "./MenuContext";
import { selectItemsCarrito } from "../../redux/carrito/carritoSelectors";
import { PiShoppingCartThin } from "react-icons/pi";
import { GrFormSubtract, GrFormAdd } from "react-icons/gr";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { decrementar, incrementar, borrarProducto } from "../../redux/carrito/carritoActions";

const Navbar = () => {
  const { state, dispatch } = useContext(Context);
  const itemsCarrito = selectItemsCarrito();
  const dispatchD = useDispatch();

  return (
    <HeaderContainerStyled>
      <NavbarContainerStyled>
        <MenuStyled>
          <ButtonMenu onClick={() => dispatch({ type: "toggle_menu" })}>
            <SlMenu />
          </ButtonMenu>
          <NavListPrincipal className={state.isMenuOpen ? "openMenu" : ""}>
            <NavItem to="/"> Home </NavItem>
            <NavItem to="productos"> Productos </NavItem>
            <NavItem to="beneficios"> Beneficios </NavItem>
            <NavItem to="contacto"> Contacto </NavItem>
          </NavListPrincipal>
        </MenuStyled>

        <LogoMarca src="./assets/img/logo.png" alt="logo" />

        <BtnNavbar>
          <LinkContainerInicioSesion href="#">
            <BiSolidUserRectangle />
          </LinkContainerInicioSesion>
          <ButtonCart onClick={() => dispatch({ type: "toggle_cart" })}>
            <FaShoppingCart />
          </ButtonCart>

          <Carrito className={state.isCartOpen ? "openCart" : ""}>
            <p>
              <PiShoppingCartThin /> Mi carrito{" "}
            </p>
            <ContenedorCarrito>
              {itemsCarrito.map((producto) => (
                <ProductoCarrito key={producto.id}>
                  <ProdImgCarrito src={producto.img} />
                  <DatosProductCarrito>
                    <p style={{ width: "11rem" }}>{producto.nombre} </p>
                    <p> {producto.precio}</p>
                    <CambiarCantidad>
                      <button style={{ display: "flex", alignItems: "center" }}>
                        <GrFormSubtract
                          onClick={() => dispatchD(decrementar(producto))}
                        />
                      </button>
                      <p>{producto.cantidad}</p>
                      <button style={{ display: "flex", alignItems: "center" }}>
                        <GrFormAdd
                          onClick={() => dispatchD(incrementar(producto))}
                        />
                      </button>
                    </CambiarCantidad>
                  </DatosProductCarrito>
                  <div>
                    <button>
                          <BsFillTrashFill onClick={() => dispatchD(borrarProducto(producto))}/>
                    </button>
                
                  </div>
                </ProductoCarrito>
              ))}
            </ContenedorCarrito> 
            <div style={{display: "flex", flexDirection: "column", gap: "2rem"}}> 
              <p>Total $</p>
              <button>Comprar</button>
              <button>Borrar todo</button>
              </div>

            {itemsCarrito.length === 0 && <p>No hay productos en el carrito</p>}
          </Carrito>
        </BtnNavbar>
      </NavbarContainerStyled>
    </HeaderContainerStyled>
  );
};

export default Navbar;
