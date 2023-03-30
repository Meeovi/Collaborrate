"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateInput_1 = require("../../../inputs/CustomersCreateInput");
let CreateOneCustomersArgs = class CreateOneCustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateInput_1.CustomersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateInput_1.CustomersCreateInput)
], CreateOneCustomersArgs.prototype, "data", void 0);
CreateOneCustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCustomersArgs);
exports.CreateOneCustomersArgs = CreateOneCustomersArgs;
