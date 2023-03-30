"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneVendorsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VendorsCreateInput_1 = require("../../../inputs/VendorsCreateInput");
let CreateOneVendorsArgs = class CreateOneVendorsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsCreateInput_1.VendorsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VendorsCreateInput_1.VendorsCreateInput)
], CreateOneVendorsArgs.prototype, "data", void 0);
CreateOneVendorsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneVendorsArgs);
exports.CreateOneVendorsArgs = CreateOneVendorsArgs;
