"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpsertWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateWithoutOrdersInput_1 = require("../inputs/CustomersCreateWithoutOrdersInput");
const CustomersUpdateWithoutOrdersInput_1 = require("../inputs/CustomersUpdateWithoutOrdersInput");
let CustomersUpsertWithoutOrdersInput = class CustomersUpsertWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateWithoutOrdersInput_1.CustomersUpdateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersUpdateWithoutOrdersInput_1.CustomersUpdateWithoutOrdersInput)
], CustomersUpsertWithoutOrdersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutOrdersInput_1.CustomersCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutOrdersInput_1.CustomersCreateWithoutOrdersInput)
], CustomersUpsertWithoutOrdersInput.prototype, "create", void 0);
CustomersUpsertWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpsertWithoutOrdersInput", {
        isAbstract: true
    })
], CustomersUpsertWithoutOrdersInput);
exports.CustomersUpsertWithoutOrdersInput = CustomersUpsertWithoutOrdersInput;
