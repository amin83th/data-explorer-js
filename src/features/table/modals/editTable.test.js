// editTable.test.js
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { editTable } from './editTable';

describe('editTable', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should create modal with inputs for each data key', () => {
    const data = { name: 'John', age: 30 };
    const modal = editTable(data);
    container.appendChild(modal);

    // Modal root class
    expect(modal.classList.contains('modal-editable')).toBe(true);

    // Header and close button
    const header = modal.querySelector('.header');
    expect(header).toBeTruthy();
    const closeBtn = header.querySelector('.icon-close');
    expect(closeBtn).toBeTruthy();

    // Save button
    const saveBtn = modal.querySelector('.save-button');
    expect(saveBtn).toBeTruthy();
    expect(saveBtn.textContent).toBe('Save');

    // Input fields
    const inputDivs = modal.querySelectorAll('.input-div');
    expect(inputDivs.length).toBe(2);

    const firstInput = inputDivs[0].querySelector('input');
    expect(firstInput.name).toBe('name');
    expect(firstInput.value).toBe('John');
    expect(firstInput.disabled).toBe(false);

    const secondInput = inputDivs[1].querySelector('input');
    expect(secondInput.name).toBe('age');
    expect(secondInput.value).toBe('30');
    expect(secondInput.disabled).toBe(false);
  });

  it('should disable the input for the "id" key', () => {
    const data = { id: 123, name: 'Alice' };
    const modal = editTable(data);
    container.appendChild(modal);

    const inputDivs = modal.querySelectorAll('.input-div');
    const idInput = inputDivs[0].querySelector('input');
    expect(idInput.name).toBe('id');
    expect(idInput.disabled).toBe(true);

    const nameInput = inputDivs[1].querySelector('input');
    expect(nameInput.name).toBe('name');
    expect(nameInput.disabled).toBe(false);
  });

  it('should remove the modal when the close button is clicked', () => {
    const data = { test: 'value' };
    const modal = editTable(data);
    container.appendChild(modal);

    const closeBtn = modal.querySelector('.icon-close');
    closeBtn.click();

    expect(container.contains(modal)).toBe(false);
  });

  it('should handle empty data gracefully', () => {
    const data = {};
    const modal = editTable(data);
    container.appendChild(modal);

    const inputDivs = modal.querySelectorAll('.input-div');
    expect(inputDivs.length).toBe(0);

    expect(modal.querySelector('.header')).toBeTruthy();
    expect(modal.querySelector('.save-button')).toBeTruthy();
  });
});