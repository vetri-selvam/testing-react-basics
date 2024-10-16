import { render, screen } from "@testing-library/react";
import Login from "../Login";

/*Syntax for test case.

    @param name — The name of your test
    ,
    @param fn — The function for your test
    ,
    @param timeout — The timeout for an async function test
*/

// test case 1
test('checking heading component loaded',
    ()=>{
        render(<Login/>)
        expect(screen.queryByText(/Login/)).toBeInTheDocument();
    }
)

// test case 2
test('checking email and password are empty',
    ()=>{
        render(<Login />);
        expect(screen.getByPlaceholderText("Email")).toHaveValue('');
        expect(screen.getByPlaceholderText("Password")).toHaveValue('');
    }
)