"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpsertWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateWithoutCommentsInput_1 = require("../inputs/CustomersCreateWithoutCommentsInput");
const CustomersUpdateWithoutCommentsInput_1 = require("../inputs/CustomersUpdateWithoutCommentsInput");
let CustomersUpsertWithoutCommentsInput = class CustomersUpsertWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateWithoutCommentsInput_1.CustomersUpdateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersUpdateWithoutCommentsInput_1.CustomersUpdateWithoutCommentsInput)
], CustomersUpsertWithoutCommentsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutCommentsInput_1.CustomersCreateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutCommentsInput_1.CustomersCreateWithoutCommentsInput)
], CustomersUpsertWithoutCommentsInput.prototype, "create", void 0);
CustomersUpsertWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpsertWithoutCommentsInput", {
        isAbstract: true
    })
], CustomersUpsertWithoutCommentsInput);
exports.CustomersUpsertWithoutCommentsInput = CustomersUpsertWithoutCommentsInput;
