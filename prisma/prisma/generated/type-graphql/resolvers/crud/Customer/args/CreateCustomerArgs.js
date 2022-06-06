"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerCreateInput_1 = require("../../../inputs/CustomerCreateInput");
let CreateCustomerArgs = class CreateCustomerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCreateInput_1.CustomerCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerCreateInput_1.CustomerCreateInput)
], CreateCustomerArgs.prototype, "data", void 0);
CreateCustomerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateCustomerArgs);
exports.CreateCustomerArgs = CreateCustomerArgs;
