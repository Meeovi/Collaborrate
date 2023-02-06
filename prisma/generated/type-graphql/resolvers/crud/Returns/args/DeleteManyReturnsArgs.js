"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyReturnsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsWhereInput_1 = require("../../../inputs/ReturnsWhereInput");
let DeleteManyReturnsArgs = class DeleteManyReturnsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsWhereInput_1.ReturnsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsWhereInput_1.ReturnsWhereInput)
], DeleteManyReturnsArgs.prototype, "where", void 0);
DeleteManyReturnsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyReturnsArgs);
exports.DeleteManyReturnsArgs = DeleteManyReturnsArgs;
