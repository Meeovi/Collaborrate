"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyOotoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OotoWhereInput_1 = require("../../../inputs/OotoWhereInput");
let DeleteManyOotoArgs = class DeleteManyOotoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoWhereInput_1.OotoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoWhereInput_1.OotoWhereInput)
], DeleteManyOotoArgs.prototype, "where", void 0);
DeleteManyOotoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyOotoArgs);
exports.DeleteManyOotoArgs = DeleteManyOotoArgs;
