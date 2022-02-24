import { param } from 'express/lib/request';
import { status } from 'express/lib/response';
import Products from '../models/Product'

export const createProducts = async (req,res) => {
    
    const {name, category, price, imgURL} = req.body

    const newProduct = new Products({name, category, price, imgURL});

    const productSaved = await newProduct.save()
    
    res.status(201).json(productSaved)
}

export const getProducts = async (req,res) => {
    const products = await Products.find();
    res.json(products)


}

export const getProductsById = async (req,res) => {
    const product = await Products.findById(req.params.productId);
    res.status(200).json(product)


}

export const updateProductsById = async (req,res) => {
    const updateProduct = await Products.findByIdAndUpdate(req.params.productId, req.body, {
        new: true
    })
    res.status(200).json(updateProduct)

}

export const deleteProductsById = async (req,res) => {
    const {productId} = req.params;
    await Products.findByIdAndDelete(productId) 
        
    res.status(204).json()

}