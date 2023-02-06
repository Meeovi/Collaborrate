"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstStatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstStatesArgs_1 = require("./args/FindFirstStatesArgs");
const States_1 = require("../../../models/States");
const helpers_1 = require("../../../helpers");
let FindFirstStatesResolver = class FindFirstStatesResolver {
    async findFirstStates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).states.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstStatesArgs_1.FindFirstStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstStatesResolver.prototype, "findFirstStates", null);
FindFirstStatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => States_1.States)
], FindFirstStatesResolver);
exports.FindFirstStatesResolver = FindFirstStatesResolver;
