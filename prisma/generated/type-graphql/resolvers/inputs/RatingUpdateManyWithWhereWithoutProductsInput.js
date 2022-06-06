"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingUpdateManyWithWhereWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingScalarWhereInput_1 = require("../inputs/RatingScalarWhereInput");
const RatingUpdateManyMutationInput_1 = require("../inputs/RatingUpdateManyMutationInput");
let RatingUpdateManyWithWhereWithoutProductsInput = class RatingUpdateManyWithWhereWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingScalarWhereInput_1.RatingScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingScalarWhereInput_1.RatingScalarWhereInput)
], RatingUpdateManyWithWhereWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingUpdateManyMutationInput_1.RatingUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingUpdateManyMutationInput_1.RatingUpdateManyMutationInput)
], RatingUpdateManyWithWhereWithoutProductsInput.prototype, "data", void 0);
RatingUpdateManyWithWhereWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingUpdateManyWithWhereWithoutProductsInput", {
        isAbstract: true
    })
], RatingUpdateManyWithWhereWithoutProductsInput);
exports.RatingUpdateManyWithWhereWithoutProductsInput = RatingUpdateManyWithWhereWithoutProductsInput;
