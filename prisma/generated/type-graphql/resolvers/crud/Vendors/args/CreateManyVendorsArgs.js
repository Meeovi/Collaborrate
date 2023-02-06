"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyVendorsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VendorsCreateManyInput_1 = require("../../../inputs/VendorsCreateManyInput");
let CreateManyVendorsArgs = class CreateManyVendorsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VendorsCreateManyInput_1.VendorsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyVendorsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyVendorsArgs.prototype, "skipDuplicates", void 0);
CreateManyVendorsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyVendorsArgs);
exports.CreateManyVendorsArgs = CreateManyVendorsArgs;
