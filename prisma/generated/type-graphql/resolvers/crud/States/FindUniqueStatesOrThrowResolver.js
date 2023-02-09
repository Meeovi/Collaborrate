"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueStatesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueStatesOrThrowArgs_1 = require("./args/FindUniqueStatesOrThrowArgs");
const States_1 = require("../../../models/States");
const helpers_1 = require("../../../helpers");
let FindUniqueStatesOrThrowResolver = class FindUniqueStatesOrThrowResolver {
    async findUniqueStatesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).states.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => States_1.States, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueStatesOrThrowArgs_1.FindUniqueStatesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueStatesOrThrowResolver.prototype, "findUniqueStatesOrThrow", null);
FindUniqueStatesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => States_1.States)
], FindUniqueStatesOrThrowResolver);
exports.FindUniqueStatesOrThrowResolver = FindUniqueStatesOrThrowResolver;
