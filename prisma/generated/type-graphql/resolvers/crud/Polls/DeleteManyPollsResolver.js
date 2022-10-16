"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPollsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyPollsArgs_1 = require("./args/DeleteManyPollsArgs");
const Polls_1 = require("../../../models/Polls");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyPollsResolver = class DeleteManyPollsResolver {
    async deleteManyPolls(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).polls.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPollsArgs_1.DeleteManyPollsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyPollsResolver.prototype, "deleteManyPolls", null);
DeleteManyPollsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Polls_1.Polls)
], DeleteManyPollsResolver);
exports.DeleteManyPollsResolver = DeleteManyPollsResolver;
