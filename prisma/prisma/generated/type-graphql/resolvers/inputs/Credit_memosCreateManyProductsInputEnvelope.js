"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosCreateManyProductsInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosCreateManyProductsInput_1 = require("../inputs/Credit_memosCreateManyProductsInput");
let Credit_memosCreateManyProductsInputEnvelope = class Credit_memosCreateManyProductsInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosCreateManyProductsInput_1.Credit_memosCreateManyProductsInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosCreateManyProductsInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Credit_memosCreateManyProductsInputEnvelope.prototype, "skipDuplicates", void 0);
Credit_memosCreateManyProductsInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosCreateManyProductsInputEnvelope", {
        isAbstract: true
    })
], Credit_memosCreateManyProductsInputEnvelope);
exports.Credit_memosCreateManyProductsInputEnvelope = Credit_memosCreateManyProductsInputEnvelope;
