"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertStatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertStatesArgs_1 = require("./args/UpsertStatesArgs");
const States_1 = require("../../../models/States");
const helpers_1 = require("../../../helpers");
let UpsertStatesResolver = class UpsertStatesResolver {
    async upsertStates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertStatesArgs_1.UpsertStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertStatesResolver.prototype, "upsertStates", null);
UpsertStatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => States_1.States)
], UpsertStatesResolver);
exports.UpsertStatesResolver = UpsertStatesResolver;
