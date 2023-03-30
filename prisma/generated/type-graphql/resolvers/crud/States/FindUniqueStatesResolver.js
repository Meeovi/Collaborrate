"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueStatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueStatesArgs_1 = require("./args/FindUniqueStatesArgs");
const States_1 = require("../../../models/States");
const helpers_1 = require("../../../helpers");
let FindUniqueStatesResolver = class FindUniqueStatesResolver {
    async findUniqueStates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).states.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueStatesArgs_1.FindUniqueStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueStatesResolver.prototype, "findUniqueStates", null);
FindUniqueStatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => States_1.States)
], FindUniqueStatesResolver);
exports.FindUniqueStatesResolver = FindUniqueStatesResolver;
