"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTrainingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByTrainingsArgs_1 = require("./args/GroupByTrainingsArgs");
const Trainings_1 = require("../../../models/Trainings");
const TrainingsGroupBy_1 = require("../../outputs/TrainingsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTrainingsResolver = class GroupByTrainingsResolver {
    async groupByTrainings(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trainings.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TrainingsGroupBy_1.TrainingsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTrainingsArgs_1.GroupByTrainingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTrainingsResolver.prototype, "groupByTrainings", null);
GroupByTrainingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Trainings_1.Trainings)
], GroupByTrainingsResolver);
exports.GroupByTrainingsResolver = GroupByTrainingsResolver;
