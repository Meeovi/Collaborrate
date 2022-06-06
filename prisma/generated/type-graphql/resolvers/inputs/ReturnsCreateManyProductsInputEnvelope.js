"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsCreateManyProductsInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsCreateManyProductsInput_1 = require("../inputs/ReturnsCreateManyProductsInput");
let ReturnsCreateManyProductsInputEnvelope = class ReturnsCreateManyProductsInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsCreateManyProductsInput_1.ReturnsCreateManyProductsInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsCreateManyProductsInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReturnsCreateManyProductsInputEnvelope.prototype, "skipDuplicates", void 0);
ReturnsCreateManyProductsInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsCreateManyProductsInputEnvelope", {
        isAbstract: true
    })
], ReturnsCreateManyProductsInputEnvelope);
exports.ReturnsCreateManyProductsInputEnvelope = ReturnsCreateManyProductsInputEnvelope;
