
import React from "react";
import {render, cleanup, fireEvent,screen } from '@testing-library/react'

import Employee from '../views/dashboard/Leave Management/Leave application';

it("Test form submit and validation", () => {

  const { getByPlaceholderText, getByText } = render(<Employee />);
  const Name = getByPlaceholderText(/Reason/i);

  const id = screen.getByTestId('toggle')

  fireEvent.change(Name, { target: { value: "Sick" } });
  fireEvent.click(id);
});
