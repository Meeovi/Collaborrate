"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyShipmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShipmentsCreateManyInput_1 = require("../../../inputs/ShipmentsCreateManyInput");
let CreateManyShipmentsArgs = class CreateManyShipmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShipmentsCreateManyInput_1.ShipmentsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyShipmentsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyShipmentsArgs.prototype, "skipDuplicates", void 0);
CreateManyShipmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyShipmentsArgs);
exports.CreateManyShipmentsArgs = CreateManyShipmentsArgs;
