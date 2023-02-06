"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyZonesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ZonesUpdateManyMutationInput_1 = require("../../../inputs/ZonesUpdateManyMutationInput");
const ZonesWhereInput_1 = require("../../../inputs/ZonesWhereInput");
let UpdateManyZonesArgs = class UpdateManyZonesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesUpdateManyMutationInput_1.ZonesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ZonesUpdateManyMutationInput_1.ZonesUpdateManyMutationInput)
], UpdateManyZonesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesWhereInput_1.ZonesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesWhereInput_1.ZonesWhereInput)
], UpdateManyZonesArgs.prototype, "where", void 0);
UpdateManyZonesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyZonesArgs);
exports.UpdateManyZonesArgs = UpdateManyZonesArgs;
