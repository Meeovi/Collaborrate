"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateInput_1 = require("../../../inputs/CustomersCreateInput");
let CreateCustomersArgs = class CreateCustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateInput_1.CustomersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateInput_1.CustomersCreateInput)
], CreateCustomersArgs.prototype, "data", void 0);
CreateCustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateCustomersArgs);
exports.CreateCustomersArgs = CreateCustomersArgs;
