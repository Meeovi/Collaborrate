"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyVisitsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyVisitsArgs_1 = require("./args/DeleteManyVisitsArgs");
const Visits_1 = require("../../../models/Visits");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyVisitsResolver = class DeleteManyVisitsResolver {
    async deleteManyVisits(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visits.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyVisitsArgs_1.DeleteManyVisitsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyVisitsResolver.prototype, "deleteManyVisits", null);
DeleteManyVisitsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Visits_1.Visits)
], DeleteManyVisitsResolver);
exports.DeleteManyVisitsResolver = DeleteManyVisitsResolver;
