"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyZonesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ZonesWhereInput_1 = require("../../../inputs/ZonesWhereInput");
let DeleteManyZonesArgs = class DeleteManyZonesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesWhereInput_1.ZonesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesWhereInput_1.ZonesWhereInput)
], DeleteManyZonesArgs.prototype, "where", void 0);
DeleteManyZonesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyZonesArgs);
exports.DeleteManyZonesArgs = DeleteManyZonesArgs;
