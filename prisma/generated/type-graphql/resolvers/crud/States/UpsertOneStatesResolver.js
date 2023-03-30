"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneStatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneStatesArgs_1 = require("./args/UpsertOneStatesArgs");
const States_1 = require("../../../models/States");
const helpers_1 = require("../../../helpers");
let UpsertOneStatesResolver = class UpsertOneStatesResolver {
    async upsertOneStates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).states.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => States_1.States, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneStatesArgs_1.UpsertOneStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneStatesResolver.prototype, "upsertOneStates", null);
UpsertOneStatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => States_1.States)
], UpsertOneStatesResolver);
exports.UpsertOneStatesResolver = UpsertOneStatesResolver;
