"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneZonesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ZonesUpdateInput_1 = require("../../../inputs/ZonesUpdateInput");
const ZonesWhereUniqueInput_1 = require("../../../inputs/ZonesWhereUniqueInput");
let UpdateOneZonesArgs = class UpdateOneZonesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesUpdateInput_1.ZonesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ZonesUpdateInput_1.ZonesUpdateInput)
], UpdateOneZonesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesWhereUniqueInput_1.ZonesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ZonesWhereUniqueInput_1.ZonesWhereUniqueInput)
], UpdateOneZonesArgs.prototype, "where", void 0);
UpdateOneZonesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneZonesArgs);
exports.UpdateOneZonesArgs = UpdateOneZonesArgs;
