"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpsertWithoutReturnsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateWithoutReturnsInput_1 = require("../inputs/CustomersCreateWithoutReturnsInput");
const CustomersUpdateWithoutReturnsInput_1 = require("../inputs/CustomersUpdateWithoutReturnsInput");
let CustomersUpsertWithoutReturnsInput = class CustomersUpsertWithoutReturnsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateWithoutReturnsInput_1.CustomersUpdateWithoutReturnsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersUpdateWithoutReturnsInput_1.CustomersUpdateWithoutReturnsInput)
], CustomersUpsertWithoutReturnsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutReturnsInput_1.CustomersCreateWithoutReturnsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutReturnsInput_1.CustomersCreateWithoutReturnsInput)
], CustomersUpsertWithoutReturnsInput.prototype, "create", void 0);
CustomersUpsertWithoutReturnsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpsertWithoutReturnsInput", {
        isAbstract: true
    })
], CustomersUpsertWithoutReturnsInput);
exports.CustomersUpsertWithoutReturnsInput = CustomersUpsertWithoutReturnsInput;
