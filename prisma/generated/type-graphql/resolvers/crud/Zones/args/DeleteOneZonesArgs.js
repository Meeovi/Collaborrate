"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneZonesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ZonesWhereUniqueInput_1 = require("../../../inputs/ZonesWhereUniqueInput");
let DeleteOneZonesArgs = class DeleteOneZonesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesWhereUniqueInput_1.ZonesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ZonesWhereUniqueInput_1.ZonesWhereUniqueInput)
], DeleteOneZonesArgs.prototype, "where", void 0);
DeleteOneZonesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneZonesArgs);
exports.DeleteOneZonesArgs = DeleteOneZonesArgs;
